var history, architecture, packages;

Reveal.addEventListener("ready", function() {
    jsPlumb.reset();

    history = jsPlumb.getInstance({
        Connector: [ "Bezier", { curviness: 50 } ],
        PaintStyle: { lineWidth: 3, strokeStyle: "#000" },
        Endpoint: "Blank",
        Anchors: [ "BottomCenter", "TopCenter" ]
    });

    history.connect({source:"peardb", target:"pearmdb"});
    history.connect({source:"metabase", target:"pearmdb"});
    history.connect({source:"pearmdb", target:"pearmdb2"});
    history.connect({source:"pearmdb2", target:"doctrineorm"});
    history.connect({source:"zenddb", target:"doctrineorm"});
    history.connect({source:"doctrineorm", target:"doctrineorm2"});
    history.connect({source:"doctrineorm", target:"doctrinedbal"});

    architecture = jsPlumb.getInstance({
        Connector: [ "Bezier", { curviness: 25 } ],
        PaintStyle: { lineWidth: 3, strokeStyle: "#999" },
        Endpoint: "Blank",
        Anchors: [ "BottomCenter", "TopCenter" ]
    });

    architecture.connect({source:"eventmanager", target:"unitofwork", anchors: ["Right", "Left"]});
    architecture.connect({source:"eventmanager", target:"objectmanager"});
    architecture.connect({source:"metadata", target:"hydrator"});
    architecture.connect({source:"metadata", target:"persister"});
    architecture.connect({source:"hydrator", target:"unitofwork"});
    architecture.connect({source:"persister", target:"unitofwork"});
    architecture.connect({source:"unitofwork", target:"objectmanager"});
    architecture.connect({source:"objectmanager", target:"repository"});
    architecture.connect({source:"objectmanager", target:"query"});
    architecture.connect({source:"query", target:"repository", anchors: ["Left", "Right"]});

    packages = jsPlumb.getInstance({
        Connector: [ "Bezier", { curviness: 25 } ],
        PaintStyle: { lineWidth: 3, strokeStyle: "#999" },
        Endpoint: "Blank",
        Anchors: [ "BottomCenter", "TopCenter" ]
    });

    packages.connect({source:"lexer", target:"annotations", anchors: ["Left", "Right"]});
    packages.connect({source:"cache", target:"annotations", anchors: ["Right", "Left"]});
    packages.connect({source:"cache", target:"common"});
    packages.connect({source:"annotations", target:"common"});
    packages.connect({source:"lexer", target:"common"});
    packages.connect({source:"inflector", target:"common", anchors: ["Left", "Right"]});
    packages.connect({source:"collections", target:"common", anchors: ["Right", "Left"]});
    packages.connect({source:"common", target:"dbal"});
    packages.connect({source:"common", target:"mongodb"});
    packages.connect({source:"common", target:"couchdb"});
    packages.connect({source:"common", target:"phpcrodm"});
    packages.connect({source:"dbal", target:"orm"});
    packages.connect({source:"mongodb", target:"mongodbodm"});
    packages.connect({source:"couchdb", target:"couchdbodm"});
});

Reveal.addEventListener('slidechanged', function() {
    history.repaintEverything();
    packages.repaintEverything();
    architecture.repaintEverything();
});
