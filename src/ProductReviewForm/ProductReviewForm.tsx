import styles from './ProductReviewForm.module.scss';
import { Formik, Form, Field } from 'formik';

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

    
    return (
        <Formik
            initialValues={{ fullName: '', email: '', review: ''}}
            onSubmit={(values: FormValues) => {
                console.log(values);
            }}
            validate={validate}
        >
            {({ errors, touched, isValidating, handleChange, values }) => (
                <Form>
                    <div className={styles['input-group']}>
                        { errors.fullName ? <div>{errors.fullName}</div> : <label htmlFor='fullName'>ФИО</label> }
                        <Field className={styles.input} name='fullName' id='fullName' type='text'/>
                    </div>
                    <Field className={styles.input} type='text' name='email'/>
                    <textarea className={styles.textarea} name='review'/>
                    <button type='submit'>Submit</button>
                </Form>
            )}            
        </Formik>
    )
}