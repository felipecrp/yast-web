
function StatusPage() {
  return (
    <div className="status_page">
      <h1>Status Page</h1>
      <div className="main">
        <div className="content">
          <p id="report">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id 
            voluptatem accusantium aut corrupti. Asperiores saepe reprehenderit, 
            cumque ipsam totam, quaerat error est, eveniet consequatur facere dolor!
          </p>
          <h2>Done work items</h2>
          <ul className="work-item-list done">
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Nunc dignissim risus id metus.</li>
          </ul>
          <h2>In progress work items</h2>
          <ul className="work-item-list in-progress">
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Nunc dignissim risus id metus.</li>
          </ul>
          <h2>Todo work items</h2>
          <ul className="work-item-list todo">
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
            <li>Nunc dignissim risus id metus.</li>
          </ul>
        </div>
        <div className="sidebar">
          <div className="burndown">.</div>
        </div>
      </div>
    </div>
  );
}


export default StatusPage;