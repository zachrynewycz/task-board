import Logo from "@/components/Logo";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full py-5 border-t-neutral-300 border">
            <div className="max-w-screen-2xl mx-auto flex justify-between">
                <Logo />
                <div className="font-bold text-neutral-500 flex gap-5">
                    <span>Terms of Serivce</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
