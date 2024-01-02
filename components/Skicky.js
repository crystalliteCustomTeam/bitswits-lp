import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
//
import { BsX } from "react-icons/bs";
//
import tel from "@/public/images/fixed/tel.webp"
import call from "@/public/images/fixed/call.webp"

const Skicky = () => {

    const [isHovered, setIsHovered] = useState(false);

    function loc() {
        setIsHovered((prev) => !prev);
    }

    return (
        <>
            <div className="newtownfy">
                <div className="chat">
                    <span className="icon">
                        <Image width="30" height="30" alt="bitswits" className="img-fluid" src={tel} loading="lazy" />
                        <div className="txtBody">
                            <Link href="javascript:$zopim.livechat.window.show();">Chat Now</Link>
                        </div>
                    </span>
                </div>
                <div className="call">
                    <span className="icon">
                        <Image width="30" height="30" alt="bitswits" className="img-fluid" src={call} loading="lazy" />
                        <div className="txtBody">
                            <Link href="tel:13123795987">1 - 312 379 5987</Link>
                        </div>
                    </span>
                </div>
            </div>


            <div className={isHovered ? 'openForm active' : 'openForm'}>
                <div className="wrapper">
                    <span className="close" onClick={() => loc()}>
                        {isHovered ?

                            <BsX />
                            :
                            'Get In Touch'
                        }

                    </span>
                    <form id="leadPopupForm" className="popup-form" data-hs-cf-bound="true">
                        <div className="inputGroup">
                            <h3 className="f-20 center fw800">Get A Free Quote Now!</h3>
                        </div>
                        <div className="inputGroup">
                            <input name="name" type="text" placeholder="Full Name*" required="" />
                        </div>
                        <div className="inputGroup">
                            <input name="email" type="email" placeholder="Email Address*" required="" />
                        </div>
                        <div className="inputGroup">
                            <input type="phone" required="" minlength="7" maxlength="15" name="phone" placeholder="Phone No*" onkeypress="return /[0-9]/i.test(event.key)" />
                        </div>
                        <div className="inputGroup">
                            <textarea name="comments" placeholder="Let Us know Time And Date To Call You."></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Skicky
