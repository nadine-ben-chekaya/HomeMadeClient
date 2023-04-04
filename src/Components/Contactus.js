import React, { Component } from 'react'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <form action="/" className="contactus" >
                    <h2 className="h2Contact">Contact US</h2>
                    <div class="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-user"></i>
                        </div>
                        <input class="input-fieldcontactus" type="text" placeholder="Username" name="usrnm" />
                    </div>

                    <div class="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-at" ></i>
                        </div>
                        <input class="input-fieldcontactus" type="text" placeholder="Email" name="email" />
                    </div>

                    <div class="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-phone"></i>
                        </div>
                        <input class="input-fieldcontactus" type="text" placeholder="phone number" name="phone" />
                    </div>

                    <div class="input-containercontactus">
                        <div className="iconcontactus">
                            <i class="fas fa-envelope"></i>
                        </div>

                        <textarea className="contactus" name="subject" placeholder="Write something.." ></textarea>
                    </div>

                    <button type="submit" class="btncontactus">Contact US</button>
                </form>
            </div>
        )
    }
}
