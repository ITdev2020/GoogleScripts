function folderReport() {
    var dApp = DriveApp;
    var destinationFolderId = "1eqT7pp0EI0nO_EruOwvey5Xr4r0p_En_";
    var folder = dApp.getFolderById(destinationFolderId);
    var filesIter = folder.getFiles();

    var source = SpreadsheetApp.openById("1nwv76_4YFLe1xyQqqQnclQFqHqTLzrzMyOKaUrZDZ0I");
    var ss = source.getSheetByName("Sheet1");

    var i = 1;

    while(filesIter.hasNext()){
        var file = filesIter.next();
        var filename = file.getName();
        var filecreate = file.getDateCreated();
        var fileowner = file.getOwner();
        var fileusname = fileowner.getName();
        ss.getRange(i, 1).setValue(filename);
        ss.getRange(i, 2).setValue(filecreate);
        ss.getRange(i, 3).setValue(fileusname);
        i++;
    }
    var ss = source.getSheetByName("Sheet1").sort(2, false);
}