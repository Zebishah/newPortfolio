const Footer = () => {
  return (
    <div className="flex w-full">
      <footer className="bg-[#0a0909] text-white p-8 w-full">
        <div className="container mx-auto font-radios">
          <div className="flex items-center justify-center smd:flex-row smd:gap-x-5 sssm:flex-col sssm:gap-y-3">
            <div className="text-sm text-cyan-400">
              © 2023 Zohaib Haider. All rights reserved.
            </div>
            <div className="flex flex-row items-start justify-start smd:gap-x-3 sssm:gap-x-6 ">
              <div className="flex flex-row items-center justify-center gap-x-1">
                <i className="text-cyan-400 fas fa-envelope" />
                <p className="text-xs text-cyan-400 font-custom">
                  Zebihaider123@gmail.com
                </p>
              </div>

              <div className="flex flex-row items-center justify-center gap-x-1">
                <i className="text-cyan-400 fab fa-whatsapp" />
                <p className="text-xs text-cyan-400 font-custom">
                  +92-310-5904269
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
