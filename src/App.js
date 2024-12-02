import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import TransformationLinker from "./container/TransformationPartner/TransformationLinker";
import Careers from "./components/Careers/Careers";
import ThankYou from "./components/Thank/ThankYou";
import Guide from "./components/Guides/Guide";
import DigitalParent from "./pages/DigitalParent";
import Contact from "./pages/Contact";
import ConvoService from "./pages/ConvoService";
import EnhanceParent from "./pages/EnhanceParent";
import Events from "./pages/Events";
import PostTwo from "./pages/PostTwo";
import BlogOne from "./components/BlogOne/BlogOne";
import BlogTwo from "./components/BlogTwo/BlogTwo";
import BlogThree from "./components/BlogThree/BlogThree";
import BlogFour from "./components/BlogFour/BlogFour";
import BlogFive from "./components/BlogFive/BlogFive";
import BlogSix from "./components/BlogSix/BlogSix";
import BlogSeven from "./components/BlogSeven/BlogSeven";
import CaseStudiesParent from "./pages/CaseStudies-parent";
const HomeOne = lazy(() => import("./pages/HomeOne"));
const HomeTwo = lazy(() => import("./pages/HomeTwo"));
const HomeThree = lazy(() => import("./pages/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const BlogClassic = lazy(() => import("./pages/BlogClassic"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const BlogCategories = lazy(() => import("./pages/BlogCategories"));
const BlogTag = lazy(() => import("./pages/BlogTag"));

function App() {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 500,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])
  return (
      <Router>
        <NavScrollTop>
          <Suspense fallback={<div />}>
                <Routes>
                  <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<HomeOne/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-one"}`} element={<HomeOne/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-two"}`} element={<HomeTwo/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-three"}`} element={<HomeThree/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/about"}`} element={<About/>} />

                  <Route path={`${process.env.PUBLIC_URL + "/service"}`} element={<Service/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/work"}`} element={<Work/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/Transformation"}`} element={<TransformationLinker/>} />
                  <Route path="/careers" element={<Careers/>}/>
                  <Route path="/guide" element={<Guide/>}></Route>
                  <Route path="/events" element={<Events/>}></Route>
                  <Route path="/Convoservice" element={<ConvoService/>}></Route>
                  <Route path="/DigitalParent" element={<DigitalParent/>}></Route>
                  <Route path="/EnhanceParent" element={<EnhanceParent/>}></Route>
                  <Route path="/posttwo" element={<PostTwo/>}></Route>
                  <Route path="/blog" element={<BlogOne/>}></Route>
                  <Route path="/blogtwo" element={<BlogTwo/>}></Route>
                  <Route path="/blogthree" element={<BlogThree/>}></Route>
                  <Route path="/blogfour" element={<BlogFour/>}></Route>
                  <Route path="/blogfive" element={<BlogFive/>}></Route>
                  <Route path="/blogsix" element={<BlogSix/>}></Route>
                  <Route path="/blogseven" element={<BlogSeven/>}></Route>
                  <Route path="/casestudies" element={<CaseStudiesParent/>}></Route>
                  <Route path={`${process.env.PUBLIC_URL + "/contact"}`} element={<Contact/>} />
                  <Route path="/Thank" element={<ThankYou/>}/>
                </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
  );
}

export default App;