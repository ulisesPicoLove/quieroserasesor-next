import AsesoresContainer from '../components/AsesoresContainer'
import HeaderAsesores from '../components/HeaderAsesores'
import Steps from '../components/Steps'
import Expectations from '../components/Expectations'
import Goals from '../components/Goals'
import Benefits from '../components/Benefits'
import FooterStarts from '../components/FooterStarts'
import WhatsNext from '../components/WhatsNext'

export default function AsesoresNewPage() {
  return (
    <AsesoresContainer>
      <HeaderAsesores/>
      <Steps/>
      <Expectations/>
      <Goals/>
      <Benefits/>
      <FooterStarts/>
      <WhatsNext/>
    </AsesoresContainer>
  )
}
