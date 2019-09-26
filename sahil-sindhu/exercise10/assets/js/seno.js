window.onload = function(){
    //create option in selectbox in form field according to no of data values
    TW.seno.senoLocal.createOption();

    //select the region according to user entery and show in dropdown
    TW.seno.senoLocal.selectRegion();

    //create seno included table
    TW.seno.senoLocal.createIncludedTable();

    //swap data from seno included table to excluded table
    TW.seno.senoLocal.swapIncludedSeno();
}








