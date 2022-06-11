import { useEffect, useState } from "react";


function StatusPage(props: { projectId: number }) {
  const [project, setProject] = useState({
    "id": props.projectId,
    "name": "ABC",
    "lastReport": `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id 
      voluptatem accusantium aut corrupti. Asperiores saepe reprehenderit, 
      cumque ipsam totam, quaerat error est, eveniet consequatur facere dolor!`,
    "stats": {
    },
    "workItems": {
      "done": [
        { "id": 1, "name": "Interface X" },
        { "id": 2, "name": "Access to the server API" }
      ],
      "inProgress": [
        { "id": 3, "name": "Main API server" },
        { "id": 4, "name": "Feature B" }
      ]  
    }
  });

  useEffect(() => {

  });

  return (
    <div className="status_page">
      <h1>{project.name}</h1>
      <div className="main">
        <div className="content">
          <p className="last-report">{project.lastReport}</p>
          <h2>Done work items</h2>
          <ul className="work-items-list done">
            {project.workItems.done.map((workItem) => <WorkItem workItem={workItem}></WorkItem>)}
          </ul>
          <h2>In progress work items</h2>
          <ul className="work-items-list in-progress">
            {project.workItems.inProgress.map((workItem) => <WorkItem workItem={workItem}></WorkItem>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function WorkItemList(props: any) {
  return (
    <div>
      <h2>Done work items</h2>
      <table>
      </table>
    </div>
  );
}

function WorkItem(props: { workItem: { id: number, name: String }}) {
  return (<li><a href={props.workItem.id.toString()}>{props.workItem.name}</a></li>);
}


export default StatusPage;