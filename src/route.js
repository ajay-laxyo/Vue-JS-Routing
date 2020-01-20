// import component
import Home from './views/home.vue'
import About from './views/about.vue'
import Contact from './views/contact.vue'
import Services from './views/service.vue'
import Blogs from './views/blogs.vue'


// routes..........
export default [
	{ path:"/", component: Home },
	{ path:"/about", component: About },
	{ path:"/blogs", component:Blogs },
	{ path:"/contact", component: Contact },
	{ path:"/service", component: Services }
];