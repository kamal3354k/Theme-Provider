import { useState } from 'react'


function WebOtp() {
  const [otp, setotp] = useState(0)
  if ("OTPCredential" in window) {
    const ac = new AbortController();

    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        setotp(otp.code);
        alert(otp.code)
        alert(JSON.stringify(otp),"otp")
        ac.abort();
      })
      .catch((err) => {
        ac.abort();
        alert(JSON.stringify(err),"err");
      });
  }else{
    alert("not support")
  }
  return (
    <>
     you otp : {otp}
    </>
  )
}

export default WebOtp
