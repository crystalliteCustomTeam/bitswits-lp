
import Link from "next/link";
import Image from "next/image";
//
import { BsX } from "react-icons/bs";
//
import tel from "@/public/images/fixed/tel.webp"
import call from "@/public/images/fixed/call.webp"
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/router';

const Skicky = () => {

    const [isHovered, setIsHovered] = useState(false);

    function loc() {
        setIsHovered((prev) => !prev);
    }

    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])


    const [score, setScore] = useState('Submit');


    const router = useRouter();
    const currentRoute = router.pathname;

    
    useEffect(() => {
        const pagenewurl = window.location.href;
        console.log(pagenewurl);
      }, []);

    const handleSubmit = async (e) => {

        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
        console.log(JSONdata);


        fetch('api/emailapi/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })



        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Bitswits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });

        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }

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
                    <form id="leadPopupForm" onSubmit={handleSubmit} className="popup-form" data-hs-cf-bound="true">
                        <div className="inputGroup">
                            <h3 className="f-20 center fw800">Get A Free Quote Now!</h3>
                        </div>
                        <div className="inputGroup">
                            <input name="name" minLength="4" type="text" placeholder="Full Name*" required />
                        </div>
                        <div className="inputGroup">
                            <input name="email" type="email" placeholder="Email Address*" required />
                        </div>
                        <div className="inputGroup">
                            <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" required name="phone" placeholder="Phone No*" />
                        </div>
                        <div className="inputGroup">
                            <textarea name='comment' required placeholder="Let Us know Time And Date To Call You."></textarea>
                        </div>
                        <button value={score} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Skicky
