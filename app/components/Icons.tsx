type IconsProps = {
    className: string
}
export const IconHome = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home"><path d="m19.091,7.233l-4.844-4.152c-1.251-1.072-3.244-1.072-4.495,0l-4.843,4.152c-1.055.903-1.659,2.218-1.659,3.606v8.16c0,1.517,1.233,2.75,2.75,2.75h12c1.517,0,2.75-1.233,2.75-2.75v-8.16c0-1.389-.604-2.703-1.659-3.606Zm-9.341,13.017v-5.25c0-.689.561-1.25,1.25-1.25h2c.689,0,1.25.561,1.25,1.25v5.25h-4.5Zm9.5-1.25c0,.689-.561,1.25-1.25,1.25h-2.25v-5.25c0-1.517-1.233-2.75-2.75-2.75h-2c-1.517,0-2.75,1.233-2.75,2.75v5.25h-2.25c-.689,0-1.25-.561-1.25-1.25v-8.16c0-.95.414-1.85,1.135-2.468l4.844-4.152c.354-.303.805-.47,1.271-.47s.917.167,1.271.47l4.844,4.152c.721.618,1.135,1.518,1.135,2.468v8.16Z"></path></svg>
    )
}
export const IconContact = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="call"><path d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"></path></svg>
    )
}
export const IconAboutUs = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" id="company"><path d="M23.16 1H8.84A2.85 2.85 0 0 0 6 3.84V30a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3.84A2.85 2.85 0 0 0 23.16 1ZM18 29h-4v-4h4Zm6 0h-4v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5H8V3.84A.84.84 0 0 1 8.84 3h14.32a.84.84 0 0 1 .84.84Z"></path><path d="M20 5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM12 5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm0 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"></path></svg>
    )
}
export const IconProduct = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="product"><path d="M905.5 307v541.5c0 24.9-.3 49.9 0 74.8v1l50-50H104.7c-11.5 0-23-.1-34.5 0h-1.5l50 50V382.8c0-24.9.3-49.9 0-74.8v-1l-50 50H919.5c11.5 0 23 .1 34.5 0h1.5c12.8 0 26.3-5.6 35.4-14.6 8.7-8.7 15.2-22.9 14.6-35.4-.6-12.9-4.8-26.3-14.6-35.4-9.8-9-21.8-14.6-35.4-14.6H104.7c-11.5 0-23-.1-34.5 0h-1.5c-27 0-50 22.9-50 50v541.5c0 24.9-.3 49.9 0 74.8v1c0 27 22.9 50 50 50H919.5c11.5 0 23 .1 34.5 0h1.5c27 0 50-22.9 50-50V382.8c0-24.9.3-49.9 0-74.8v-1c0-12.8-5.6-26.3-14.6-35.4-8.7-8.7-22.9-15.2-35.4-14.6-12.9.6-26.3 4.8-35.4 14.6-8.9 9.9-14.6 21.9-14.6 35.4z"></path><path d="M955.5 257.1H104.7c-11.5 0-23-.1-34.5 0h-1.5c11.8 28.5 23.6 56.9 35.4 85.4l66-70.2c35.1-37.3 70.2-74.5 105.2-111.8 8-8.5 16.1-17.1 24.1-25.6-11.8 4.9-23.6 9.8-35.4 14.6h435.4c20 0 40 .3 60 0h.9c-11.8-4.9-23.6-9.8-35.4-14.6l66 70.2c35.1 37.3 70.2 74.5 105.2 111.8 8 8.5 16.1 17.1 24.1 25.6 8.6 9.2 22.9 14.6 35.4 14.6 12.3 0 26.9-5.4 35.4-14.6 8.7-9.5 15.2-22 14.6-35.4-.6-13.5-5.3-25.4-14.6-35.4-19.9-21.1-39.7-42.2-59.6-63.3-33.9-36-67.7-72-101.6-107.9-10.1-10.8-20.3-21.5-30.4-32.3-10.3-11-23.1-18.4-39.2-18.7h-481c-9 0-19.9-1-28.5 1.8-17.2 5.6-26.7 17.8-38.4 30.2-31.5 33.4-62.9 66.8-94.4 100.3-26.8 28.5-53.6 56.9-80.4 85.4-1.4 1.5-2.9 3.1-4.3 4.6-13.9 14.8-18.3 35.8-10.3 54.6 7.7 18.1 25.6 30.7 45.7 30.7H919.4c11.5 0 23 .1 34.5 0h1.5c12.8 0 26.3-5.6 35.4-14.6 8.7-8.7 15.2-22.9 14.6-35.4-.6-12.9-4.8-26.3-14.6-35.4-9.7-8.9-21.7-14.6-35.3-14.6z"></path><path d="M572.4 307v274.2c25.1-14.4 50.2-28.8 75.2-43.2-33-17.3-66-34.6-99.1-51.9-4.2-2.2-8.4-4.5-12.7-6.7-7.8-3.9-16.3-7.3-25.3-6.9-9.2.4-17 2.6-25.3 6.8-.4.2-.8.4-1.2.7-2.2 1.2-4.5 2.3-6.7 3.5-19.2 10.1-38.4 20.1-57.6 30.2-15.4 8.1-30.8 16.2-46.3 24.2 25.1 14.4 50.2 28.8 75.2 43.2V306.9l-50 50H622.3c12.8 0 26.3-5.6 35.4-14.6 8.7-8.7 15.2-22.9 14.6-35.4-.6-12.9-4.8-26.3-14.6-35.4-9.8-9-21.8-14.6-35.4-14.6H398.6c-27 0-50 22.9-50 50v274.2c0 17.6 9.6 34.3 24.8 43.2 16 9.4 34.4 8.4 50.5 0 32.6-17.1 65.3-34.2 97.9-51.3 4.7-2.4 9.3-4.9 14-7.3h-50.5c32.6 17.1 65.3 34.2 97.9 51.3 4.7 2.4 9.3 4.9 14 7.3 16 8.4 34.5 9.4 50.5 0 15.2-8.9 24.8-25.5 24.8-43.2V306.9c0-12.8-5.6-26.3-14.6-35.4-8.7-8.7-22.9-15.2-35.4-14.6-12.9.6-26.3 4.8-35.4 14.6-9 10-14.7 22-14.7 35.5z"></path></svg>)
}
export const IconTwitter = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg>
    )
}
export const IconInstagram = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
    )
}
export const IconFacebook = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>
    )
}
export const IconWhatsApp = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="whatsapp"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path></svg>
    )
}
export const IconMasterCard = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="mastercard"><path d="M24,12c0-4.141-3.32-7.5-7.416-7.5c-1.52,0-2.931,0.461-4.105,1.252c0.06,0.052,0.12,0.099,0.165,0.152C14.4,7.438,15.405,9.662,15.405,12c0,2.336-1.001,4.558-2.748,6.1c-0.058,0.05-0.12,0.099-0.181,0.148c1.177,0.792,2.588,1.252,4.107,1.252C20.68,19.501,24,16.143,24,12z"></path><path d="M12,17.894c0.096-0.075,0.189-0.154,0.28-0.235c1.563-1.374,2.551-3.397,2.551-5.659c0-2.261-0.987-4.284-2.551-5.659C12.19,6.261,12.096,6.184,12,6.108c-0.096,0.076-0.189,0.152-0.28,0.234C10.156,7.716,9.169,9.74,9.169,12c0,2.261,0.987,4.284,2.551,5.659C11.81,17.74,11.905,17.819,12,17.894z"></path><path d="M7.417,19.5c1.517,0,2.93-0.46,4.107-1.252c-0.061-0.049-0.123-0.098-0.181-0.148c-1.747-1.538-2.748-3.762-2.748-6.1c0-2.338,1.005-4.562,2.761-6.097c0.045-0.053,0.105-0.1,0.165-0.152C10.347,4.961,8.934,4.5,7.416,4.5C3.32,4.5,0,7.858,0,12S3.32,19.501,7.417,19.5z"></path></svg>
    )
}
export const IconPaypal = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="paypal"><path d="M20.43705,7.10449a3.82273,3.82273,0,0,0-.57281-.5238,4.72529,4.72529,0,0,0-1.15766-3.73987C17.6226,1.61914,15.77494,1,13.2144,1H7.00053A1.89234,1.89234,0,0,0,5.13725,2.5918L2.5474,18.99805A1.53317,1.53317,0,0,0,4.063,20.7832H6.72709l-.082.52051A1.46684,1.46684,0,0,0,8.0933,23h3.23438a1.76121,1.76121,0,0,0,1.751-1.46973l.64063-4.03125.01074-.05468h.29883c4.03223,0,6.55078-1.99317,7.28516-5.7627A5.149,5.149,0,0,0,20.43705,7.10449ZM7.84233,13.7041l-.71448,4.53528-.08631.54382H4.606L7.09721,3H13.2144c1.93554,0,3.31738.4043,3.99218,1.16406a2.96675,2.96675,0,0,1,.60791,2.73334l-.01861.11224c-.01215.07648-.0232.15119-.0434.24622a5.84606,5.84606,0,0,1-2.00512,3.67053,6.67728,6.67728,0,0,1-4.21753,1.183H9.70658A1.87969,1.87969,0,0,0,7.84233,13.7041Zm11.50878-2.40527c-.55078,2.82812-2.24218,4.14551-5.32226,4.14551h-.4834a1.76109,1.76109,0,0,0-1.751,1.47265l-.64941,4.07422L8.71733,21l.47815-3.03387.61114-3.85285h1.7193c.1568,0,.29541-.02356.44812-.02893.35883-.01239.71661-.02618,1.05267-.06787.20526-.02557.39362-.07221.59034-.1087.27252-.05036.54522-.10016.80108-.17127.19037-.053.368-.12121.54907-.18561.23926-.0849.4748-.174.69757-.27868.168-.0791.32807-.16706.48658-.25727a6.77125,6.77125,0,0,0,.61236-.39172c.14228-.1026.28192-.20789.415-.321a6.56392,6.56392,0,0,0,.53693-.51892c.113-.12055.2287-.23755.33331-.36725a7.09,7.09,0,0,0,.48-.69263c.07648-.12219.16126-.23523.23163-.36383a8.33175,8.33175,0,0,0,.52075-1.15326c.00867-.02386.02106-.044.02954-.068.004-.01123.00989-.02057.01386-.03186A4.29855,4.29855,0,0,1,19.35111,11.29883Z"></path></svg>
    )
}
export const IconVisa = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="visa"><path d="M18.15 24.87h-2.26l1.41-8.71h2.25Zm8.16-8.5a5.46 5.46 0 0 0-2-.37c-2.22 0-3.79 1.19-3.8 2.88 0 1.25 1.12 1.95 2 2.37s1.16.7 1.16 1.08c0 .58-.7.85-1.35.85a4.52 4.52 0 0 1-2.11-.46l-.3-.14-.32 2a7 7 0 0 0 2.52.46c2.36 0 3.9-1.17 3.92-3 0-1-.6-1.75-1.89-2.37-.79-.4-1.27-.67-1.27-1.07s.4-.75 1.29-.75a3.75 3.75 0 0 1 1.68.33l.21.09.3-1.88Zm3 5.41h1.87l-.52-2.52-.16-.75c-.11.33-.3.85-.29.84s-.72 1.93-.9 2.43Zm2.78-5.62 1.81 8.71h-2.08s-.21-1-.27-1.31h-2.89c-.09.23-.48 1.31-.48 1.31h-2.36l3.35-8a1.11 1.11 0 0 1 1.17-.72Zm-18.09 0-2.2 5.94-.25-1.21a6.61 6.61 0 0 0-3.11-3.65l2 7.62h2.38l3.54-8.7Zm-4.25 0H6.13v.17a7.54 7.54 0 0 1 5.46 4.56l-.78-4a.93.93 0 0 0-1-.73Z"></path></svg>
    )
}

export const IconFavoriteOutlined = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="favorite"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"></path></svg>
    )
}
export const IconFavoriteFullFilled = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="favorite"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"></path></svg>
    )
}
export const IconSearch = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" id="search" x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve"><path d="M11.854 21.854c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.588-8-8-8z"></path><path d="M26.146 27.146a.997.997 0 0 1-.707-.293l-7.694-7.694a.999.999 0 1 1 1.414-1.414l7.694 7.694a.999.999 0 0 1-.707 1.707z"></path></svg>
    )
}
export const IconArrow = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="://www.w3.org/2000/svg" viewBox="0 0 11 20" id="arrow"><path fillRule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path></svg>
    )
}

export const IconBagShop = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="shopping-bag"><path d="M19,7H16V6A4,4,0,0,0,8,6V7H5A1,1,0,0,0,4,8V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM10,6a2,2,0,0,1,4,0V7H10Zm8,13a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H8v1a1,1,0,0,0,2,0V9h4v1a1,1,0,0,0,2,0V9h2Z"></path></svg>
    )
}
export const IconCartShop = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="cart"><path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path></svg>
    )
}
export const IconMenu = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" id="menu"><path d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"></path></svg>
    )
}
export const IconX = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" id="x"><path d="M1.41 0 0 1.41l.72.72L2.5 3.94.72 5.72 0 6.41l1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72L6.41 0l-.69.72L3.94 2.5 2.13.72 1.41 0z"></path></svg>
    )
}
export const IconHappyFace = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="happy"><path d="M14.36,14.23a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54ZM9.21,10.54a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41,3.08,3.08,0,0,0-4.24,0,1,1,0,1,0,1.41,1.41A1,1,0,0,1,9.21,10.54Zm8.41-1.41a3.08,3.08,0,0,0-4.24,0,1,1,0,0,0,1.41,1.41,1,1,0,0,1,1.42,0,1,1,0,0,0,1.41,0A1,1,0,0,0,17.62,9.13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path></svg>
    )
}
export const IconCall = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="call"><path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.06,1.06,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1ZM21.86,2.68a1,1,0,0,0-.54-.54,1,1,0,0,0-.38-.08h-4a1,1,0,1,0,0,2h1.58l-3.29,3.3a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l3.3-3.29V7.06a1,1,0,0,0,2,0v-4A1,1,0,0,0,21.86,2.68Z"></path></svg>

    )
}
export const IconChat = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat"><path d="M20.61,19.19A7,7,0,0,0,17.87,8.62,8,8,0,1,0,3.68,14.91L2.29,16.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,18H8.69A7,7,0,0,0,15,22h6a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09ZM8,15a6.63,6.63,0,0,0,.08,1H5.41l.35-.34a1,1,0,0,0,0-1.42A5.93,5.93,0,0,1,4,10a6,6,0,0,1,6-6,5.94,5.94,0,0,1,5.65,4c-.22,0-.43,0-.65,0A7,7,0,0,0,8,15ZM18.54,20l.05.05H15a5,5,0,1,1,3.54-1.46,1,1,0,0,0-.3.7A1,1,0,0,0,18.54,20Z"></path></svg>

    )
}
export const IconLocation = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 24 24" id="location"><path d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"></path></svg>
    )
}
export const IconAdd = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="add"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
    )
}
export const IconCheck = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path></svg>
    )
}
export const IconFilter = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="filter"><path d="M5.505 1.993v24.874l-2.562-2.05C1.387 23.613-.452 25.9 1.069 27.159c.098.035 5.535 4.55 5.499 4.254.47.166.984.029 1.374-.255l4.999-4a1.5 1.5 0 1 0-1.874-2.341l-2.562 2.05V1.993c-.029-1.955-2.965-1.985-3 0zM30 4.493H14.128a1.5 1.5 0 1 0 0 2.999H30a1.5 1.5 0 1 0 0-3zm0 6.664H16.774a1.5 1.5 0 1 0 0 3H30a1.5 1.5 0 1 0 0-3zm0 6.666H19.42a1.5 1.5 0 1 0 0 3H30a1.5 1.5 0 1 0 0-3zm0 6.665h-7.936a1.5 1.5 0 1 0 0 3H30a1.5 1.5 0 1 0 0-3z"></path></svg>
    )
}

export const IconSort = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" id="sort"><path d="M226.918,106.17c5.077,5.077,5.077,13.308,0,18.385c-2.538,2.538-5.866,3.808-9.192,3.808c-3.327,0-6.653-1.269-9.192-3.808
	l-80.17-80.171v454.614c0,7.18-5.82,13-13,13s-13-5.82-13-13V44.384l-80.17,80.171c-5.076,5.076-13.309,5.076-18.385,0
	c-5.077-5.077-5.077-13.308,0-18.385L106.171,3.807C108.608,1.37,111.915,0,115.363,0s6.755,1.37,9.192,3.808L226.918,106.17z
	 M508.191,387.445c-5.076-5.076-13.309-5.076-18.385,0l-80.17,80.171V13.001c0-7.18-5.82-13-13-13s-13,5.82-13,13v454.614
	l-80.171-80.171c-5.076-5.076-13.309-5.076-18.385,0c-5.077,5.077-5.077,13.308,0,18.385l102.363,102.363
	c2.438,2.438,5.744,3.808,9.192,3.808s6.755-1.37,9.192-3.808L508.191,405.83C513.269,400.752,513.269,392.522,508.191,387.445z"></path></svg>)
}

export const IconArrowLarge = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="up-arrow"><path d="M11.293,1.293a1,1,0,0,1,.325-.216.986.986,0,0,1,.764,0,1,1,0,0,1,.325.216l8,8a1,1,0,0,1-1.414,1.414L13,4.414V22a1,1,0,0,1-2,0V4.414L4.707,10.707A1,1,0,0,1,3.293,9.293Z"></path></svg>
    )
}
export const IconLogOut = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="log-out"><path d="M29.71,16.71l-4,4-1.42-1.42L26.59,17H21a3,3,0,0,1-3-3V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V27a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V20h2v7a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H17a3,3,0,0,1,3,3v9a1,1,0,0,0,1,1h5.6l-2.26-2.28,1.42-1.41,3.95,4A1,1,0,0,1,29.71,16.71Z" data-name="44 Log out, Basic, Essential"></path></svg>)
}

export const IconLogIn = ({ className }: IconsProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="login"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path></svg>)
}
