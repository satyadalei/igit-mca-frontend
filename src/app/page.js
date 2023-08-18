import HeroSectionMain from '@/components/hero/HeroSectionMain'
import MainCoordinators from '@/components/landingPage/mainCoordinators/MainCoordinators'
import Notes from '@/components/landingPage/noteSection/Notes'

export default function Home() {
  return (
    <main>
       <HeroSectionMain/>
       <Notes/>
       <MainCoordinators/>
    </main>
  )
}
