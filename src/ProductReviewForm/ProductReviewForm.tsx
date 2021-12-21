import styles from './ProductReviewForm.module.scss';
import { Formik, Form, Field, useFormik } from 'formik';

interface FormValues {
    fullName: string;
    email: string;
    review: string;
}

const validate = (values: FormValues) => {
    const errors = {} as FormValues;
    if (!values.fullName) {
        errors.fullName = 'Required';
    } else if (values.fullName === '11') {
        errors.fullName = '11'
    }  

    return errors;
}


export const ProductReviewForm: React.FC<{}> = () => {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            review: ''
        },
        validate,
        onSubmit: (values: FormValues) => {
            console.log(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles['input-group']}>
                { formik.errors.fullName ? <div>{formik.errors.fullName}</div> : <label htmlFor='fullName'>ФИО</label> }
                <input 
                    id='fullName'
                    name='fullName'
                    type='text' 
                    className={styles.input} 
                    onChange={formik.handleChange} 
                    value={formik.values.fullName} 
                />
            </div>
            <input className={styles.input} type='text' name='email'/>
            <textarea className={styles.textarea} name='review'/>
            <button type='submit'>Submit</button>
        </form>
    )
}