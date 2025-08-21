import { useState, useEffect } from "react";
import Project from "../components/Project"
import ImageSlider from "../components/ImageSlider"
import { myProjects } from "../constants"
import {motion, useMotionValue, useSpring} from "motion/react"

function Projects() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, {damping: 10, stiffness: 50})
    const springY = useSpring(y, {damping: 10, stiffness: 50})
    
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }
    
    const [preview, setPreview] = useState(null);
    const [previewImages, setPreviewImages] = useState([]);
    
    // Find the project images when preview is set
    useEffect(() => {
        if (preview) {
            // Find which project contains this preview image
            const project = myProjects.find(proj => proj.image.includes(preview));
            if (project) {
                setPreviewImages(project.image);
            } else {
                setPreviewImages([preview]);
            }
        } else {
            setPreviewImages([]);
        }
    }, [preview]);

    return (
        <section 
            id="work"
            onMouseMove={handleMouseMove}
            className="relative c-space section-spacing"
        >
            <h2 className="text-heading">Some Cool Projects</h2>
            
            {/* Container with same responsive approach as About section */}
            <div className="w-full mt-12">
                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-4"></div>
                
                {/* Projects container with proper width constraints */}
                <div className="w-full max-w-full overflow-hidden">
                    {myProjects.map((project) => (
                        <Project key={project.id} {...project} setPreview={setPreview}/>
                    ))}
                </div>
            </div>
            
            {preview && previewImages.length > 0 && (
                <motion.div 
                    className="fixed top-0 left-0 z-50 pointer-events-none w-100 h-70"
                    style={{x: springX, y: springY}}
                >
                    <ImageSlider 
                        images={previewImages}
                        interval={1500} // 1 second for preview
                        showControls={false}
                        className="w-full h-full shadow-lg"
                        onImageChange={() => {}} // No need to update preview in this case
                    />
                </motion.div>
            )}
        </section>
    )
}

export default Projects