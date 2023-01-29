let index=0;
function changeBG()
{
    
    let colors=['gray','green','blue','orange','purple','pink','cyan'];
    document.body.style.background=colors[index++];
    if(index> colors.length -1)
    {
        index=0;
    }
    
}