KISSY.Editor.add("maximize/support",function(){var d=KISSY,e=d.Editor,g=d.UA,k=g.ie,l=d.Node,h=d.Event,f=d.DOM,i,j={};f.addStyleSheet(".ke-toolbar-padding {padding:5px;}","ke-maximize");d.mix(j,{onClick:function(){var a=this,b=a.editor;!1!==b.fire("beforeRestoreWindow")&&a._resize&&(h.remove(window,"resize",a._resize),a._resize=0,a.call("_saveEditorStatus"),a.call("_restoreState"),a.btn.boff(),setTimeout(function(){a.call("_restoreEditorStatus");b.notifySelectionChange();b.fire("restoreWindow")},
30))},_restoreState:function(){var a=document,b=this.editor,c=this._savedParents;if(c){for(var d=0;d<c.length;d++){var e=c[d];e.el.css("position",e.position)}this._savedParents=null}b.wrap.css({height:this.iframeHeight});f.css(a.body,{width:"",height:"",overflow:""});a.documentElement.style.overflow="";a=b.editorWrap[0].style;a.position="static";a.width=this.editorWrapWidth;i.css({left:"-99999px",top:"-99999px"});window.scrollTo(this.scrollLeft,this.scrollTop);this.btn.get("el").one("span").removeClass("ke-toolbar-restore").addClass("ke-toolbar-maximize").attr("title",
"\u5168\u5c4f");8>k&&this.editor.toolBarDiv.removeClass("ke-toolbar-padding")},_saveSate:function(){var a=this.editor,b=[],c=a.editorWrap;this.iframeHeight=a.wrap._4e_style("height");this.editorWrapWidth=c._4e_style("width");this.scrollLeft=f.scrollLeft();this.scrollTop=f.scrollTop();window.scrollTo(0,0);for(a=c.parent();a;)c=a.css("position"),"static"!=c&&(b.push({el:a,position:c}),a.css("position","static")),a=a.parent();this._savedParents=b;b=this.btn.get("el");b.one("span").removeClass("ke-toolbar-maximize").addClass("ke-toolbar-restore");
b.attr("title","\u53d6\u6d88\u5168\u5c4f");8>k&&this.editor.toolBarDiv.addClass("ke-toolbar-padding")},_saveEditorStatus:function(){var a=this.editor;this.savedRanges=null;g.gecko&&a.iframeFocus&&(this.savedRanges=(a=a.getSelection())&&a.getRanges())},_restoreEditorStatus:function(){var a=this.editor,b=a.getSelection(),c=this.savedRanges;g.gecko&&a.activateGecko();c&&b&&b.selectRanges(c);a.iframeFocus&&b&&(a=b.getStartElement())&&a[0]&&a._4e_scrollIntoView()},_maximize:function(a){var b=document,c=this.editor,d=c.editorWrap,
g=f.viewportHeight(),h=f.viewportWidth(),j=c.statusDiv?c.statusDiv[0].offsetHeight:0,l=c.toolBarDiv[0].offsetHeight;k?b.body.style.overflow="hidden":f.css(b.body,{width:0,height:0,overflow:"hidden"});b.documentElement.style.overflow="hidden";d.css({position:"absolute",zIndex:e.baseZIndex(e.zIndexManager.MAXIMIZE),width:h+"px"});i.css({zIndex:e.baseZIndex(e.zIndexManager.MAXIMIZE-5),height:g+"px",width:h+"px"});d.offset({left:0,top:0});i.css({left:0,top:0});c.wrap.css({height:g-j-l+"px"});!0!==a&&
arguments.callee.call(this,!0)},_real:function(){var a=this,b=a.editor;if(!a._resize){a.call("_saveEditorStatus");a.call("_saveSate");a.call("_maximize");if(!a._resize){var c=a.cfg._maximize;a._resize=e.Utils.buffer(function(){c.call(a);b.fire("maximizeWindow")},a,100)}h.on(window,"resize",a._resize);a.btn.bon();setTimeout(function(){a.call("_restoreEditorStatus");b.notifySelectionChange();b.fire("maximizeWindow")},30)}},offClick:function(){!1!==this.editor.fire("beforeMaximizeWindow")&&(i||(i=(new l("<iframe  class='ke-maximize-shim' style='position:absolute;top:-9999px;left:-9999px;' frameborder='0'>")).prependTo(document.body)),
this.call("_real"))},destroy:function(){this._resize&&(h.remove(window,"resize",this._resize),this._resize=0)}});e.Maximize=j},{attach:!1});