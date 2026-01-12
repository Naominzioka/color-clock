import { format } from 'date-fns';

function App() {
  // We use new Date() to get the exact moment the component renders
  const now = new Date();
  /* The 'PPpp' format means 'PP' is date written in a readable way and 'pp' is time in a readable way. */
  const formattedDate = format(now, 'PPpp')

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p className='clock'>{formattedDate}</p>
    </div>
  );
}

export default App;