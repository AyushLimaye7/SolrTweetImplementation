import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';

const Credit = ({visible, onClick}) =>{
  return <Modal visible={visible} onClickBackdrop={onClick}>

   <div className="modal-body container">

     <div className="row">
     <div className="col-md-12">
       <div className="card-body d-flex flex-column align-items-start">
             <strong className="d-inline-block mb-1 text-primary">UI + Facetting </strong>
             <h3 className="mb-0">
               <a className="text-dark" href="http://github.com/necronet/">Jose Luis Ayerdis Espinoza</a>
             </h3>
             <p className="card-text mb-auto">
               Facet, query optimization with similarity techniques, UI archiquitecture and communication with Solr and deployment,
             </p>
       </div>
     </div>
      <div className="form-group col-12">
        <hr/>
      </div>
      <div className="col-md-12">
        <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-1 text-success">Sentiment Analysis + Reporting</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Ayush Limaye</a>
              </h3>
              <p className="card-text mb-auto">
                Implemented <strong>sentiment analysis</strong> techniques into the dataset, video, reporting and filtering of data.
              </p>
        </div>
      </div>
      <div className="form-group col-12">
        <hr/>
      </div>
      <div className="col-md-12">
        <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-1 text-danger">Summarization + Translation</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Satya Chaitanya Chembolu</a>
              </h3>
              <p className="card-text mb-auto">
                Implement and showcase different <strong>highlighting</strong> techniques and <strong>summarization</strong> methods.
                As well as implementing the translation routines that were ultimately expose as an external API.
              </p>
        </div>
      </div>

     </div>
   </div>
  </Modal>
}

class TopHeader extends React.Component {

  constructor() {
    super();
    this.state = {visible:false}
  }

  render() {

    const onClick = ()=>this.setState({visible:!this.state.visible});

    return <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <span className="navbar-brand mb-0 h1">InfoRet</span>
              <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Demo<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/necronet/IR-project4/"  target="_blank">Source code</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com/watch?v=veH42gPllnU&feature=youtu.be"  target="_blank">Video</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={onClick}>Credit</a>
                </li>
              </ul>
              </div>
              <Credit visible={this.state.visible} onClick={onClick}/>
              { this.props.displayAnalytics && <div className="form-inline">
                <button className="btn btn-info" type="submit" onClick={this.props.showAnalytics}>Analytics</button>
              </div>
              }
            </nav>;

          }
}
export default TopHeader;
