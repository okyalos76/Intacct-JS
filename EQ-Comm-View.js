console.log('setting default EQ-Comm View values');
jq('.qx-pt-section').parent().parent().parent().parent().after(jq('#mainPage'));
jq('#editbuttid').prop("disabled",true);
