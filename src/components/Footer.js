import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="newsletter">
                <div className='newsletter__content'>
                    <div className="newsletter__text">
                        <h2 className="newsletter__title">
                            Subscribe to our Newsletter!
                        </h2>
                        <p>Receive the latest movie <strong>recommendations</strong>, <strong>reviews</strong> and <strong>movie news</strong> every two weeks.</p>
                    </div>
                    <div className="newsletter__input-group">
                        <form className="newsletter__form">
                            <input className='newsletter__input' type="text" name="email" placeholder='Enter email address' />
                            <button class='button' type='submit' onClick={(e) => e.preventDefault()}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <div className="credits">
                    <span>Powered by </span><a href="https://www.themoviedb.org/" target="_blank">TMDb</a>
                </div>
                <div className="copyright">
                    <p>
                        Copyright &#169; 2021 Cinemacloud
                    </p>

                </div>
            </div>
        </footer>
    )
}