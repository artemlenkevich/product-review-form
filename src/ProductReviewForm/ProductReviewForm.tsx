import styles from './ProductReviewForm.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    name: string;
    email: string;
    review: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Поле не может быть пустым')
        .matches(/\S/, 'Поле не может быть пустым'),
    email: Yup.string()
        .email('Некорректный email')
        .required('Поле не может быть пустым'),
    review: Yup.string()
        .required('Поле не может быть пустым')
        .matches(/^\S/, 'Поле не может быть пустым')
        .matches(/\D/, 'Не только цифры')
        // .matches(//, 'Не только заглавные бувы без пробелов')
})

export const ProductReviewForm: React.FC<{}> = () => {

    
    return (
        <Formik
            initialValues={{ name: '', email: '', review: ''}}
            onSubmit={(values: FormValues) => {
                console.log(values);
            }}
            validationSchema={validationSchema}
        >
            {({ errors }) => (
                <Form>
                    <div className={styles['form-row']}>
                        <div className={styles['input-group']}>
                            { errors.name ? <div>{errors.name}</div> : <label className={styles.label} htmlFor='name'>ФИО</label> }
                            <Field className={styles.input} name='name' id='name' type='text'/>
                        </div>
                        <div className={styles['input-group']}>
                            { errors.email ? <div>{errors.email}</div> : <label className={styles.label} htmlFor='email'>E-mail</label> }
                            <Field className={styles.input} name='email' id='email' type='text'/>
                        </div>
                    </div>
                    <div className={styles['input-group']}>
                        { errors.review ? <div>{errors.review}</div> : <label className={styles.label} htmlFor='name'>Отзыв</label> }
                        <Field className={styles.textarea} name='review' as='textarea' id='review' type='text'/>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            )}            
        </Formik>
    )
}