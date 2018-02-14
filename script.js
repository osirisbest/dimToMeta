function f() {

    let head = document.getElementById('head')
    let input = document.getElementById('input')

    let out=document.getElementById('output')

    let log=document.getElementById('log')
    log.value=''
    let script='dim='+'['+input.value+']'
    try{  eval(script)}
    catch(e){log.value=e}

    let entityName=head.value
    let result='{\n'+
      '"caption": "'+entityName+'"\n'+
      '"description": "'+entityName+'"\n'+
      '"documentation": "'+entityName+'"\n'+
      '"connectionName": "",\n'+
      '"descriptionAttribute": "description",\n'+
      '"cacheType": "None",\n'+
      '"attributes": [\n'
    if(!Boolean(dim.length)) {log.value='входной массив пуст'}

    for (let i=0;i<dim.length;i++){

        if (dim[i][0]==='ID') continue
        result=result+'{\n'+
        '"name": "'+dim[i][0]+'",\n'+
        '"caption": "'+dim[i][1]+'",\n'+
        '"description": "'+dim[i][1]+'",\n'+
        '"documentation": "'+dim[i][1]+'",\n'+
        '"allowNull": '+Boolean(dim[i][2])+',\n'+
        '"dataType": "'+dim[i][3]+'",\n'+
          ((String(dim[i][3])!='String')?'':'"size": '+dim[i][4]+',\n')+
          ((String(dim[i][3])!='Entity')?'':'"associatedEntity": "'+dim[i][4]+'",\n')+
          (!Boolean(dim[i][5])?'':'"defaultValue": "'+dim[i][5]+'"\n')
        '},\n'

    }

    result=result+' ],\n' +
      '  "mixins": {\n' +
      '    "mStorage": {\n' +
      '      "simpleAudit": true,\n' +
      '      "safeDelete": true\n' +
      '    }\n' +
      '  }'
    result=result+'\n }'
    out.value=result
    log.value=log.value+entityName+'.meta'
}