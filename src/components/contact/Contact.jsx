import style from "./Contact.module.css";

function Contact() {
    
    return <section className = {style.contact}>
        <h2 className = {`${style.contact_title} main_title position-relative`}>Contact</h2>
        <div className={style.contact_container}>
            <form className = {`d-flex flex-column gap-3`}>
                <input className = "p-3 border-0 border-bottom border-dark" type="text" placeholder = "Full Name"/>
                <input className = "p-3 border-0 border-bottom border-dark" type = "email" placeholder = "Email Address"/>
                <input className = "p-3 border-0 border-bottom border-dark" type = "text" placeholder = "Phone Number"/>
                <textarea className = {`${style.message} p-3 border-0 border-bottom border-dark`} name="" id="" placeholder="Message"></textarea>
            </form>
        </div>
    </section>
}

export default Contact;