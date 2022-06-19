import { useEffect, useState } from "react";
import './StatusPage.scss'

type Project = {
  id: number,
  name: String,
  lastReport: String,
  stats: any,
  workItems: {
    done?: WorkItem[],
    inProgress?: WorkItem[],
    todo?: WorkItem[],
  }
}

type WorkItem = {
  id: number,
  name: String,
}

function StatusPage(props: { projectId: number }) {
  const [project, setProject] = useState<Project|null>(null);

  useEffect(() => {
    setProject({
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
  }, []);

  if (!project) {
    return null;
  }

  return (
    <div className="status_page">
      <h1>{project.name}</h1>
      <div className="main">
        <div className="content">
          <p className="last-report">{project.lastReport}</p>
          <WorkItemList name="Done" workItems={project.workItems.done}></WorkItemList>
          <WorkItemList name="In progress" workItems={project.workItems.inProgress}></WorkItemList>
        </div>
      </div>
    </div>
  );
}

function WorkItemList(props: { name: string, workItems?: WorkItem[] }) {
  return (
    <div>
      <table className="workitem-list">
        <thead>
          <tr>
            <th className="workitem-name">{props.name} work items</th>
            <th className="workitem-fn-size">Size</th>
          </tr>
        </thead>
        <tbody>
          {props.workItems?.map((workItem) => <WorkItem workItem={workItem}></WorkItem>)} 
        </tbody>
      </table>
    </div>
  );
}

function WorkItem(props: { workItem: WorkItem }) {
  return (
    <tr>
      <td className="workitem-name">
        <a href={props.workItem.id.toString()}>{props.workItem.name}</a>
      </td>
      <td className="workitem-fn-size">
        1
      </td>
    </tr>);
}

export default StatusPage;
