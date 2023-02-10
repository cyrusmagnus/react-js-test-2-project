const Contacts = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Moscow, Russia</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p><a href="tel:+79994510542">+7 (999) 451-05-42</a></p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p><a href="mailto:kiryasovnikita0@gmail.com">kiryasovnikita0@gmail.com</a></p>
            </li>
          </ul>

        </div>
      </main>
    </>
  );
}
 
export default Contacts;