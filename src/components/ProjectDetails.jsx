import React from 'react'
import ImageSlider from './ImageSlider'

const ProjectDetails = ({ title, description, subDescription, href, image, tags, closeModal, githubUrl }) => {
    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
            <div className="relative bg-neutral-900 rounded-lg p-8 w-[95vw] max-w-6xl max-h-none overflow-visible m-4" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-20"
                    aria-label="Close modal"
                >
                    ×
                </button>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Slider - Vertically Centered */}
                    <div className="flex items-center justify-center">
                        <ImageSlider 
                            images={image}
                            interval={2000} // 2 seconds auto-change
                            showControls={true} // Show navigation controls
                            className="w-full h-64 md:h-80"
                        />
                    </div>
                    
                    {/* Project Details */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.map((tag) => (
                                    <span 
                                        key={tag.id} 
                                        className="px-3 py-1 bg-neutral-700 text-sand rounded-full text-sm"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Description */}
                            <p className="text-gray-300 mb-6">{description}</p>
                            
                            {/* Sub Description */}
                            {subDescription && subDescription.length > 0 && (
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                                    <ul className="space-y-2">
                                        {subDescription.map((item, index) => (
                                            <li key={index} className="text-gray-300 flex items-start">
                                                <span className="text-sand mr-2">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {/* Buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                {/* View Project Button */}
                                {href && (
                                    <a 
                                        href={href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sand text-black rounded-lg hover:bg-opacity-80 transition-all duration-200 font-medium"
                                    >
                                        View Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                                
                                {/* GitHub Repo Button */}
                                {githubUrl && (
                                    <a 
                                        href={githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-all duration-200 font-medium"
                                    >
                                        GitHub Repo
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.530.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails