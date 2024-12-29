import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const Layout: React.FC = ({ children }) => {
    return (
        <div className={`antialiased h-full flex-col w-full bg-white`}>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout