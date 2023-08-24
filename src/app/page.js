import HeroSectionMain from '@/components/hero/HeroSectionMain'
import MainCoordinators from '@/components/landingPage/mainCoordinators/MainCoordinators'
import Notes from '@/components/landingPage/noteSection/Notes'
import NoticeSection from '@/components/landingPage/noticeSection/NoticeSection'



export default function Home() {
  return (
    <main>
        <HeroSectionMain/>
        <NoticeSection/>
        <Notes/>
        <MainCoordinators/>
    </main>
  )
}
