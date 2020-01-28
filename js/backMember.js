(async function (){
  const memTable = document.querySelector('.mem_table tbody')

  let members = await fetch('./php/member/backMember.php')
    .then(res=>res.json())
    .then(json=>json.data)
    .catch(err=>console.log(err))

  const createTables = () => {
    members.forEach((info, index)=>{
      let tr = document.createElement('tr')
      tr.innerHTML = `
      <th scope="row">${info.mem_no}</th>
      <td>${info.mem_id}</td>
      <td>${info.mem_email}</td>
      <td>                          
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input member" id="member${index}" name="index_on"
          ${info.mem_status === 1 ? 'checked' : ''}>
          <input type="hidden" name="index_on" class="input_ad_hidden" />
          <label class="custom-control-label" for="member${index}"></label>
        </div>
      </td>
      `
      memTable.appendChild(tr)
    })
  }
  createTables()

  const controlBtn = [...document.querySelectorAll('.custom-control > .member')]
  const changeMemberStatus = function () {
    let index = controlBtn.indexOf(this)
    statusProxy[index] === 1 ? statusProxy[index] = 0 : statusProxy[index] = 1
  }
  
  const status = controlBtn.reduce((prev, dom, index)=>{
    dom.addEventListener('click', changeMemberStatus)
    prev[index] = members[index].mem_status
    return prev
  }, {})

  const statusProxy = new Proxy(status, {
    get(target, key){
      return target[key]
    },
    set(target, key, val){
      target[key] = val
      fetch('./php/member/changeMemberStatus.php', {
        method: 'POST',
        body: new URLSearchParams(`mem_no=${members[key].mem_no}&mem_status=${val}`)
      })
        .then(res=>res.json())
        .then(json=>json)
        .catch(err=>console.log(err))
    }
  })
})()