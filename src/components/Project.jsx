import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import ImageSlider from './ImageSlider'

const Project = ({title, description, subDescription, href, image, tags, setPreview, githubUrl}) => {
    const [isHidden, setIsHidden] = useState(false);

    const handleImageChange = (newImage) => {
        setPreview(newImage);
    };

    const handleMouseEnter = () => {
        // Set the first image as preview when mouse enters
        if (image && image.length > 0) {
            setPreview(image[0]);
        }
    };

    const handleMouseLeave = () => {
        setPreview(null);
    };

    return (
        <>
            <div 
                className='w-full max-w-full flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between py-10 space-y-4 sm:space-y-0 px-4 sm:px-0'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full sm:w-auto sm:flex-1 sm:pr-4">
                    <p className='text-2xl break-words'>{title}</p>
                    <div className="flex flex-wrap gap-2 sm:gap-5 mt-2 text-sand">
                        {tags.map((tag) => (
                            <span key={tag.id} className="whitespace-nowrap">{tag.name}</span>
                        ))}
                    </div>
                </div>
                
                <button 
                    onClick={() => setIsHidden(true)}
                    className='flex items-center gap-1 cursor-pointer hover-animation whitespace-nowrap mt-2 sm:mt-0'
                >
                    Read More
                    <img src='assets/arrow-right.svg' className='w-5' alt="Arrow right"/>
                </button>
            </div>
            
            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'>
                {isHidden && (
                    <ProjectDetails 
                        title={title}
                        description={description}
                        subDescription={subDescription}
                        href={href}
                        image={image}
                        tags={tags}
                        githubUrl={githubUrl}
                        closeModal={() => setIsHidden(false)}
                    />
                )}
            </div>
        </>
    )
}

export default Project