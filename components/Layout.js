import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const MyLayout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
)
  
export default MyLayout;