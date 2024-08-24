import "./detail.css"
const detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <ion-icon name="chevron-up-outline"></ion-icon>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy % help</span>
                        <ion-icon name="chevron-up-outline"></ion-icon>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Share Photo</span>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./bg.jpg" alt="" />
                                <span>Photo_2024-02-16_00-55-10.jpg</span>
                            </div>
                                <ion-icon name="cloud-download-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Share File</span>
                        <ion-icon name="chevron-up-outline"></ion-icon>
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    )
}

export default detail