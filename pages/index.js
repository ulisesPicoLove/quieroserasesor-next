import AsesoresContainer from '../components/AsesoresContainer'
import HeaderAsesores from '../components/HeaderAsesores'
import Steps from '../components/Steps'
import Expectations from '../components/Expectations'
import Goals from '../components/Goals'
import Benefits from '../components/Benefits'
import FooterStarts from '../components/FooterStarts'
import WhatsNext from '../components/WhatsNext'
import Script from 'next/script'


export default function AsesoresNewPage() {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
        onLoad={() => {
          $(document).ready(function () {
            $("#mobile-menu").click(function () {
              $(this).toggleClass('active');
              $("#nav-menu").toggleClass('shown');
              $("body, html").toggleClass("scroll-off");
            });
            $(".menu-item").click(function () {
              $("#mobile-menu").removeClass('active');
              $("#nav-menu").removeClass('shown');
              $("body, html").removeClass("scroll-off");
            });
          });
        }}
      />
      <AsesoresContainer>
        <HeaderAsesores />
        <Steps />
        <Expectations />
        <Goals />
        <Benefits />
        <FooterStarts />
        <WhatsNext />
      </AsesoresContainer>
    </>
  )
}
