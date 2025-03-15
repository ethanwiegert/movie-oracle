"use client"

import { useState, useCallback, useEffect } from "react"

interface ProfileData {
  // Define your data structure
  name?: string;
  // ... other fields
}

export default function Profile() {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<any>(null)
    const [selectedTab, setSelectedTab] = useState("overview")
    const [darkMode, setDarkMode] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }
    
    const handleClose = () => {
        setIsOpen(false)
    }

    const handleToggleDarkMode = useCallback(() => {
        setDarkMode(prev => {
            const newValue = !prev;
            localStorage.setItem('darkMode', String(newValue));
            return newValue;
        });
    }, []);

    // Initialize dark mode from localStorage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
    }, []);

    // Handle ESC key for modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen]);

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab)
    }
    
    return (
        <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-900' : 'bg-gray-100'}`}>
            {/* Loading and Error States */}
            {isLoading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    <span className="block sm:inline">{error}</span>
                </div>
            )}

            {/* Main Content */}
            {!isLoading && !error && (
                <>
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={handleToggleDarkMode}
                        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>

                    {/* Modal Trigger Button */}
                    <button
                        onClick={handleOpen}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Open Details
                    </button>

                    {/* Tab Navigation */}
                    <div className="flex space-x-4 mb-4">
                        {['overview', 'tracks', 'artists', 'genres'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`px-4 py-2 rounded ${
                                    selectedTab === tab 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Modal */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Profile Details</h2>
                                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                                <button
                                    onClick={handleClose}
                                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Tab Content */}
                    <div className="p-4">
                        {selectedTab === 'overview' && <h2>Overview Content</h2>}
                        {selectedTab === 'tracks' && <h2>Tracks Content</h2>}
                        {selectedTab === 'artists' && <h2>Artists Content</h2>}
                        {selectedTab === 'genres' && <h2>Genres Content</h2>} 
                        {}
                    </div>
                </>
            )}
        </div>
    )
}