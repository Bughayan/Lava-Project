import "./Contacts.css";

export default function Contacts() {
  return (
    <>
      <div className="contacts_section">
        <h1>CONTACTS</h1>
        <div className="contact_div">
          <div className="contact_info">
            <form action="#" method="POST">
              <label for="name">Անուն Ազգանուն</label>
              <input type="text" id="name" name="name" required />

              <label for="email">Մեյլ</label>
              <input type="email" id="email" name="email" required />

              <label for="phone">Հեղախոսահամար</label>
              <input type="tel" id="phone" name="phone" />

              <label for="message">Նամակ</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button type="submit" class="submit-button">
                Ուղարկել
              </button>
            </form>
          </div>
          <div className="map_div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.7686536098045!2d-122.0840897!3d37.421999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb89146f23b7b%3A0x1a9b2d8d8d8d8d8d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
