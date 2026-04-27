import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { layout } from './layout'
import { homePage } from './pages/home'
import { propertiesPage } from './pages/properties'
import { propertyDetailPage } from './pages/property-detail'
import { corporatePage } from './pages/corporate'
import { aboutPage } from './pages/about'
import { contactPage } from './pages/contact'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Routes
app.get('/', (c) => c.html(layout('KinCo Legacy Group | Contemporary Stays in Atlanta', homePage())))
app.get('/properties', (c) => c.html(layout('Properties | KinCo Legacy Group', propertiesPage())))
app.get('/properties/:id', (c) => {
  const id = c.req.param('id')
  return c.html(layout('Property Detail | KinCo Legacy Group', propertyDetailPage(id)))
})
app.get('/corporate', (c) => c.html(layout('Corporate Housing Atlanta | KinCo Legacy Group', corporatePage())))
app.get('/about', (c) => c.html(layout('About | KinCo Legacy Group', aboutPage())))
app.get('/contact', (c) => c.html(layout('Contact | KinCo Legacy Group', contactPage())))

// Owner Portal — redirect to Lovable app
app.get('/owner-portal', (c) => c.redirect('https://kinco-insight-hub.lovable.app', 301))

// Form submission (demo)
app.post('/api/inquire', async (c) => {
  const data = await c.req.json().catch(() => ({}))
  return c.json({ success: true, message: 'Thank you! We will be in touch within 24 hours.' })
})

export default app
