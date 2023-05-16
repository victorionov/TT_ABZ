import './FirstPage.scss';

export const FirstPage: React.FC = () => {
  return (
    <div className="firstPage-container">
      <h1 className='title-first-page'>Test assignment for front-end developer</h1>
      <p className='content-first-page'>
      What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
      </p>
      <button className='button-sign-up'>Sign up</button>
    </div>
  )
}