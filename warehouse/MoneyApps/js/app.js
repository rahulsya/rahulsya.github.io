const t_input=document.querySelector(".t-input")
const t_save=document.querySelector(".t_save")
const historyInput=document.querySelector(".historyInput")
const Tampiljumlah=document.querySelector(".jumlahUang")

let data=[]

t_save.addEventListener('click',()=>{
    // format tanggal
    let date=new Date();
    date=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

    let inputVal=t_input.value

    if (inputVal.length>0) {
        if (inputVal >=1000) {

            // push data object
            let object={value:inputVal,tanggal:date}
            data.push(object)

            // reset value input
            t_input.value=""

            // simpan ke localsotrage
            simpanDuit(data)
            //sort dari last input
            tampilHistory(data.reverse())
            // hitung jumlah duit
            hitJumlahDuit(data)
        }else{
            alert("miniman 1000")
            t_input.value=""
        }
    }else{
        console.log("cant push");
    }
})

function tampilHistory(data){
    let tampil=""
    if (data.length > 0) {
        data.forEach(history => {
            tampil+=`<div class="w-full lg:w-1/4 rounded shadow-xl bg-white flex flex-col flex-auto mb-3 mx-auto md:m-3">
            <span class="font-bold text-gray-500 pt-3 px-5">${history.tanggal}</span>
            <span class="text-gray-600 text-3xl py-3 px-5">Rp. ${new Intl.NumberFormat('id-ID',{style: 'currency', currency: 'IDR' }).format(history.value)}</span>    
        </div>`
        });
    }
    historyInput.innerHTML=tampil
}

function hitJumlahDuit(data){
    let jumlah=0
    data.map(jml=> jumlah+=parseInt(jml.value))
    Tampiljumlah.innerHTML=`${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(jumlah)}`
}

function simpanDuit(data){
    localStorage.setItem("duit",JSON.stringify(data))
}
function ambilDuid(){
    return localStorage.getItem("duit") ? JSON.parse(localStorage.getItem("duit")):[]
}

document.addEventListener("DOMContentLoaded",()=>{

    // load semua ketika baru di jalankan
    data=ambilDuid()
    tampilHistory(data.reverse())
    hitJumlahDuit(data)
})
