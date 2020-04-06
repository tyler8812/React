import React from "react"
import Header from "./components/header"
import MainContent from "./components/main"
import Footer from "./components/footer"
import ContactCard from "./components/contactCard"
import contact from "./contact"
function Test() {

    const ContactCardComponents = contact.map((c) => {
        return(
            <ContactCard 
                imgUrl={c.imgUrl}
                place={c.place}
                describe={c.describe} 
            />
        )
    })


    return (
        <div>
            <Header />
            <MainContent />
            <Footer />

            {ContactCardComponents}
            
        </div>

    )
}


export default Test