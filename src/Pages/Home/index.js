import React from 'react'
import NavBar from '../../Components/NavBar'
import Posting from '../../Components/Posting'
import './style.css'
import Posters from '../../Components/Poseters'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Home() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <div className='homeContainer'>
                <NavBar />
                <Posting />
                <Posters />
            </div>
        </QueryClientProvider>
    )
}

export default Home