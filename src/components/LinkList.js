const LinkList = (props) => {
  return (
    <>
      <div className="row d-flex justify-content-center links-list">
        {props.search !== "" && props.result && props.result.length > 0 ? (
          <div className="col-10 border-0 list-group m-1 p-1">
            {props.result.map((link, i) => (
              <div key={i} className="link-body m-2 p-3">
                <div>Name : {link.name} </div>
                <div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-black"
                  >
                    URL : {link.url}
                  </a>
                </div>
                <div>
                  Tags :
                  {link.tag.map((tagname, i) => (
                    <span key={i} className="mx-1">
                      {tagname}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : props.search === "" && props.links && props.links.length > 0 ? (
          <div className="col-10 border-0 list-group m-1 p-1">
            {props.links.map((link, i) => (
              <div key={i} className="link-body m-2 p-3">
                <div>Name : {link.name} </div>
                <div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-black"
                  >
                    URL : {link.url}
                  </a>
                </div>
                <div>
                  Tags :
                  {link.tag.map((tagname, i) => (
                    <span key={i} className="mx-1">
                      {tagname}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="col-10 border-0 list-group m-3 p-4">
            Cannot find any links!
          </div>
        )}
      </div>
    </>
  );
};

export default LinkList;
