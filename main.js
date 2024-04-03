import data from './data.json' with {type: 'json'};
const getQuery = (value) => {
    return document.querySelector(value);
}
const createElement = (value) => {
    return document.createElement(value);
}

const renderCalendar = (list) => {
    for ( let i = 0; i < list.length ; i++ ) {
        getQuery("#calendar").innerHTML += `
            <div data-toggle="modal" data-target="#daily-${list[i].id}" class="day" id="${list[i].id}">Day ${i + 1}</div>
        `;
    }
}

const createCardTask = (list,id) => {
    for ( let i = 0 ; i < list.length ; i++ ) {
        let tr = createElement("tr");
        let tdTask = createElement("td");
        let tdTime = createElement("td");
        let task = createElement("p");
        let time = createElement("span");
        task.innerHTML = list[i].task;
        time.innerHTML = list[i].time;
        tdTask.appendChild(task);
        tdTime.appendChild(time);
        tr.appendChild(tdTask);
        tr.appendChild(tdTime);
        getQuery(`#render-${id}`).appendChild(tr);
    }
}

const renderDailyTaskForCalendar = (list) => {
    for ( let i = 0; i < list.length ; i++ ) {
        getQuery("#modal").innerHTML += `
        <div class="modal fade style_table" id="daily-${list[i].id}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Day ${i + 1}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table>
                        <thead>
                            <tr>
                                <th>task</th>
                                <th>time</th>
                            </tr>
                        </thead>
                        <tbody id="render-${list[i].id}">
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
        `;
    createCardTask(list[i].daily,list[i].id);
    }
}

renderCalendar(data.day);
renderDailyTaskForCalendar(data.day);