import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

//MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress'

//Icon
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

//Redux
import { connect } from 'react-redux'
import { postScream } from '../redux/actions/dataActions'
import MyButton from '../util/MyButton';


const styles = theme => ({
    ...theme,
    submitButton: {
        position: 'relative'
    },
    progressSpinner: {
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: "90%",
        top: "10%"
    }
})

class PostScream extends Component {
    state = {
        open: false,
        body: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postScream({ body: this.state.body })
    }

    render() {
        const { errors } = this.state
        const { classes, UI: { loading } } = this.props;
        return (
            <Fragment>
                {/* <MyButton onClick={this.handleOpen} tip="Post a Scream">
                    <AddIcon />
                </MyButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm">
                    <MyButton tip="close" onClick={this.handleClose} tipClassName={classes.closeButton}>
                        <CloseIcon />
                    </MyButton>
                    <DialogTitle>Post a new scream</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField name="body" type="text" label="SCREAM!" multiline rows="3" placeholder="Scream at your fellow apes" error={errors.body ? true : false} helperText={errors.body} className={classes.textField} onChange={this.handleChange} fullWidth />
                        </form>
                        <Button type="submit" variant="contained" color="primary" className={classes.submitButton} disabled={loading} >
                            Submit
                        {loading && (
                                <CircularProgress size={30} className={classes.progressSpinner} />
                            )}
                        </Button>
                    </DialogContent>
                </Dialog> */}
            </Fragment>
        )
    }
}

PostScream.propTypes = {
    postScream: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect(mapStateToProps, { postScream })(withStyles(styles)(PostScream))

