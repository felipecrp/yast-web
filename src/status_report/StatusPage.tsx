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
    <div className="status-page">
      <h1>{project.name}</h1>
      <div className="sprint-report">
        <h2>Sprint report</h2>
        <p className="last-report">{project.lastReport}</p>
        <WorkItemList name="Done in the sprint" workItems={project.workItems.done}></WorkItemList>
        <WorkItemList name="In progress" workItems={project.workItems.inProgress}></WorkItemList>
      </div>
      <div className="project-report">
        <h2>Project overview</h2>
        <WorkItemList name="Todo" workItems={project.workItems.todo}></WorkItemList>
        <WorkItemList name="Done" workItems={project.workItems.done}></WorkItemList>
      </div>
    </div>
  );
}

function WorkItemList(props: { name: string, workItems?: WorkItem[] }) {
  return (
    <div className="workitem-list">
      <table>
        <thead>
          <tr>
            <th className="workitem-name">{props.name}</th>
            <th className="workitem-fn-size">Size</th>
          </tr>
        </thead>
        <tbody>
          {props.workItems
            ? props.workItems?.map((workItem) => <WorkItem workItem={workItem}></WorkItem>)
            : <WorkItem workItem={null}></WorkItem>
          }
        </tbody>
      </table>
    </div>
  );
}

function WorkItem(props: { workItem: WorkItem|null }) {
  return (
    <tr>
      <td className="workitem-name">
        {props.workItem
          ? <a href={props.workItem.id.toString()}>{props.workItem.name}</a>
          : "-"
        }
      </td>
      <td className="workitem-fn-size">
        {props.workItem
          ? 1
          : 0
        }
      </td>
    </tr>);
}

export default StatusPage;
