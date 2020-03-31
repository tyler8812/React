import React from "react"
import Header from "./components/header"
import MainContent from "./components/main"
import Footer from "./components/footer"
import ContactCard from "./components/contactCard"

function Test() {

    return (
        <div>
            <Header />
            <MainContent />
            <Footer />

            <ContactCard 
                name="A" 
                imgUrl="https://i.picsum.photos/id/0/5616/3744.jpg" 
                place="home" 
                describe="rest"
            />
            <ContactCard 
                name="B" 
                imgUrl="https://i.picsum.photos/id/10/2500/1667.jpg" 
                place="forest" 
                describe="green"
            />
            <ContactCard 
                name="C" 
                imgUrl="https://i.picsum.photos/id/100/2500/1656.jpg" 
                place="beach" 
                describe="play"
            />
            <ContactCard name="D" 
                imgUrl="https://i.picsum.photos/id/1002/4312/2868.jpg" 
                place="ocean" 
                describe="sea"
            />
            
        </div>

    )
}


export default Test