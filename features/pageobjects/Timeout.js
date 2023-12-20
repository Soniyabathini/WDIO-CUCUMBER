class Timeout{


    async wait(){
        await browser.pause(3000)
    }
}

module.exports=new Timeout();