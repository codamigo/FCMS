import './App.css'
import StackedList from './components/stacked-list'
import TechStack from './components/tech-stack'
import Chat from './components/chat'
import Bio from './components/bio';
import Contributors from './components/contributors'
import Navigation from './components/navigation'
// import NewArrivals from './components/new-arrivals'
import Flash from './utilities/flash';
import ImageCTA from './components/image-cta'
import EqualsLayout from './layouts/equals'
import Footer from './components/footer'
import Counter from './components/counter';
import PageShell from './layouts/page-shell';

function App() {  

  return (
      <PageShell
        
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
        provider={true} header={<Navigation></Navigation>} footer={<Footer></Footer>}>

        <TechStack></TechStack>
        <ImageCTA></ImageCTA>
        {/* <NewArrivals></NewArrivals> */}
        <div ref={Flash()}><img src="https://tailwindui.com/img/components/grid-lists.06-images-with-details-xl.jpg" /></div>

        <Counter></Counter>
        <EqualsLayout>
          <StackedList></StackedList>
          <Chat></Chat>
          <Bio></Bio>
          <Contributors></Contributors>   
        </EqualsLayout>
      </PageShell>
  )
}

export default App
